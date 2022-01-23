import React, { useState } from 'react'
import Button from '../../core/components/Button'
import { SearchResult } from '../../core/types/SearchResult'
import ImageLoader from './components/Loaders/ImageLoader'
import InfoLoader from './components/Loaders/InfoLoader'
import './styles.css'
import dayjs from 'dayjs'

const Search = () => {

   const [search, setSearch] = useState('')
   const [userData, setUserData] = useState<SearchResult>()
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsLoading(true);

      fetch(`https://api.github.com/users/${search}`)
         .then(response => response.json())
         .then(userResponse => setUserData(userResponse))
         .finally(() => {
            setIsLoading(false)
         })
   }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
   }

   const createdAt = dayjs(userData?.created_at).format("DD/MM/YYYY");

   return (
      <div className="search-container">
         <div className="search-box">
            <h2 className="search-box-title">Encontre um perfil do Github</h2>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  className="search-box-input"
                  required
                  value={search}
                  onChange={handleChange}
                  placeholder="Login Github"
               />
               <div className="btn-search">
                  <Button text="Encontrar" />
               </div>
            </form>
         </div>
      
         {userData && (
            <div className="result-container">
               {isLoading ?
                  <div className="loaders">
                     <ImageLoader />
                     <InfoLoader />
                  </div> : (
                     <div>
                        <div className="user-data-container">
                           <img
                              src={userData.avatar_url}
                              alt=""
                              className="user-avatar"
                           />
                           <div className="user-data">
                              <div className="user-stats">
                                 <span>Repositórios Públicos: {userData.public_repos}</span>
                                 <span>Seguidores: {userData.followers}</span>
                                 <span>Seguindo: {userData.following}</span>
                              </div>
                              <div className="user-info">
                                 <h3 className="user-info-title">Informações</h3>
                                 <div><strong>Empresa:</strong> {userData.company}</div>
                                 <div><strong>Website/Blog:</strong> {userData.blog}</div>
                                 <div><strong>Localidade:</strong> {userData.location}</div>
                                 <div><strong>Membro desde:</strong> {createdAt}</div>
                              </div>
                           </div>
                        </div>
                        <div className="btn-see-profile">
                           <a
                              href={userData.html_url}
                              target="_new"
                           >
                              <Button text="Acessar o perfil" />
                           </a>
                        </div>
                     </div>
                  )}
            </div>
         )}
      </div>
   )
}

export default Search
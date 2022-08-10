import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import FavoritesNFT from "./FavoritesNFT"
import MyCollection from "./MyCollection"
import MyTokens from "./MyTokens"
import Own from "./Own"

const ProfileCards = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Own />} />
                <Route path="created/mytokens" element={<MyTokens />}/>
                <Route path="created/mycollections" element={<MyCollection />} />
                <Route path="favorites/favoritesNFT" element={<FavoritesNFT />} />
                <Route  />
            </Routes>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 20px;
`

export default ProfileCards
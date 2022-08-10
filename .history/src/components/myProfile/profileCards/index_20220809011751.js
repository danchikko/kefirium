import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import FavoritesCollections from "./FavoritesCollections"
import FavoritesNFT from "./FavoritesNFT"
import Hidden from "./Hidden"
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
                <Route path="favorites/favoritesCollection" element={<FavoritesCollections />} />
                <Route path="hidden" element={<Hidden />} />
                <Route path="galleries" element={} />
            </Routes>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 20px;
`

export default ProfileCards
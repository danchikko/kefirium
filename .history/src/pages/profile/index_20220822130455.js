import styled from "styled-components";
import ProfileCards from "../../components/myProfile/profileCards";
import Navbar from "../../components/myProfile/profileControls/Navbar";

const Profile = () => {
    return (
        <Container>
            <Wrapper backround={'https://kefirium.ru/storage/app/uploads/public/62d/918/82e/62d91882ebcac874158950.png'} />
            <Block>
                <ProfileIn
                <Navbar />
                <ProfileCards />
            </Block>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 80px;
`

const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${(props) => props.backround});
`

const Block = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
`

export default Profile;
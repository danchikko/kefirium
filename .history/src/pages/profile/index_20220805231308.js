import styled from "styled-components";
import ProfileInfo from "../../components/myProfile/profileInfo/ProfileInfo";

const Profile = () => {
    return (
        <Container>
            <Wrapper backround={'https://kefirium.ru/storage/app/uploads/public/62d/918/82e/62d91882ebcac874158950.png'} />
            <ProfileInfo />
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
    max-width: 1270px;
    width: 100%;
`

export default Profile;
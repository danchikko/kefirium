import styled from "styled-components";
import Title from "../../UI/typography/Title";
import ProfileAvatar from "./ProfileAvatar";

const ProfileInfo = () => {
    return (
        <Container>
            <ProfileAvatar />
            <Title color="#673bb7" size="25px">Lts_hg</Title>
            <Profie
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    height: 569px;
    margin: 70px 0 0 0;
    display: flex;
    flex-direction: column;
`

export default ProfileInfo;
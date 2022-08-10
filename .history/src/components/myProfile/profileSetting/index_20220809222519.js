import styled from "styled-components";
import Title from "../../UI/typography/Title";

const ProfileSetting = () => {
    return (
        <Container>
            <Title color="#000000" size="40px" margin="">Настройки профиля</Title>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
`

export default ProfileSetting;
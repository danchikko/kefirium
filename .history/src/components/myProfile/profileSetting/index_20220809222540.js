import styled from "styled-components";
import Title from "../../UI/typography/Title";

const ProfileSetting = () => {
    return (
        <Container>
            <Title color="#000000" size="40px" margin="140px 0 25px 0">Настройки профиля</Title>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
`

export default ProfileSetting;
import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Text from '../../UI/typography/Text'

const SettingProfile = () => {
	return (
		<Container>
			<LeftBlock>
				<Text color='#8f9499' size='16px'>
					<Check /> - Поля отмеченые этим символом обязательны для
					получения отметки “Проверенный автор”
				</Text>
                <Label>Имя <Check /></Label>
                <Inputs placeholder='Введите имя'/>
                <Label>Фамилия <Check /></Label>
                <Inputs placeholder='Введите фамилию' />
                <Label>Отчество <Check /></Label>
                <Inputs placeholder='Введите отчество' />
                <Label>Никнейм <Check /></Label>
                <Inputs placeholder='Введите никнейм' />
                <Label>Описание профиля <Check /></Label>
                <TextArea placeholder='Введите описание' />
                <Label>Номер телефона</Label>
                <Inputs type="number" placeholder='Введите номер' />
			</LeftBlock>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const LeftBlock = styled.div`
	max-width: 480px;
	width: 100%;
`

const Check = styled(AiOutlineCheckCircle)`
	color: green;
	width: 16px;
	height: 16px;
`

const Label = styled.label`
    font-size: 16px;
    color: #000000;
    font-weight: 700;
`

const Inputs = styled.input`
    width: 100%;
    border-radius: 30px;
    color: #000000;
    padding: 0 10px 0 30px;
    margin: 12px 0 20px 0;
    height: 62px;
    border: none;
    outline: none;
    background-color: #fafafa;
    box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
    font-size: 16px;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 248px;
    resize: none;
    background-color: #fafafa;
    box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
    margin: 12px 0 20px 0;
    border-radius: 30px;
    padding: 20px 20px 0 14px;
    font-size: 16px;
    color: #000000;
    border: none;
    outline: none;
`

export default SettingProfile

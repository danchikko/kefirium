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
				<Label>
					Имя <Check />
				</Label>
				<Inputs placeholder='Введите имя' />
				<Label>
					Фамилия <Check />
				</Label>
				<Inputs placeholder='Введите фамилию' />
				<Label>
					Отчество <Check />
				</Label>
				<Inputs placeholder='Введите отчество' />
				<Label>
					Никнейм <Check />
				</Label>
				<Inputs placeholder='Введите никнейм' />
				<Label>
					Описание профиля <Check />
				</Label>
				<TextArea placeholder='Введите описание' />
				<Label>Номер телефона</Label>
				<Inputs type='tel' placeholder='Введите номер' />
				<Text size='17px' color='#8f9499'>
					<Check /> Чтобы ускорить проверку данных вашего профиля (для
					получения отметки Проверенный автор) сделайте публикацию в
					своей соц сети с хэштегом #NICKNAME_LOVE_KEFIR
				</Text>
				<Label>YouTube</Label>
				<Inputs placeholder='Введите ссылку' />
				<Label>ВКонтакте</Label>
				<Inputs placeholder='Введите ссылку' />
				<Label>Одноклассники</Label>
				<Inputs placeholder='Введите ссылку' />
				<Label>Телеграм</Label>
				<Inputs placeholder='Введите ссылку' />
				<Label>Сайт</Label>
				<Inputs placeholder='Введите ссылку' />
				<SaveButton type='submit'>Сохранить</SaveButton>
			</LeftBlock>
			<RightBlock>
				<Label>
					Аватар <Check />
				</Label>
				<Text size='17px' color='#8f9499' >
					Рекомендуемые значения 500х500 пикселей.
				</Text>
                <ImageAvatar src='https://kefirium.ru/storage/app/uploads/public/62d/918/835/62d9188353059146444667.jpg' alt='image'/>
                <Label>Баннер</Label>
                <Text size="17px" color="#8f9499">Рекомендуемые значения 1920х250 пикселей.</Text>
                <ImageBanner src='
' />
			</RightBlock>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
`

const LeftBlock = styled.div`
	max-width: 480px;
	width: 100%;
	margin-bottom: 70px;
	margin-right: 50px;
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

const SaveButton = styled.button`
	width: 173px;
	height: 60px;
	font-size: 16px;
	color: #ffffff;
	background-color: #673bb7;
	border-radius: 30px;
	border: none;
	margin-top: 30px;
	font-weight: 700;
`

const RightBlock = styled.div`
	max-width: 480px;
	margin-bottom: 70px;
`

const ImageAvatar = styled.img`
    border-radius: 50%;
    width: 160px;
    height: 160px;
`

const ImageBanner = styled.img`
    width: 100%;
    height: 68px;
    border-radius: 30px;
`

export default SettingProfile

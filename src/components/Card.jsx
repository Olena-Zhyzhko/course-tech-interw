import { useEffect, useState} from 'react'
import message from '../img/picture2.png'
import boy from '../img/Boy.png'
import logo from '../img/Vector.svg'
import { CardConteiner,
    Logo,
    Message,
    Line,
    Boy,
    Text,
    BtnAdd,
    BtnAdded,
    ButtonName } from './Card.styled'

export const Card = () => {
    const [ followers, setFollowers ] = useState(() => {
        return JSON.parse(window.localStorage.getItem('followers')) ?? 100500});
    const [ status, setStatus ] =useState(() => {
        return JSON.parse(window.localStorage.getItem('status')) ?? false});

    const countFollower = () =>{
        if (!status) {
            const addFollower = followers + 1;
            setFollowers(addFollower);
            setStatus(true);
            return
        }
        const removeFollower = followers - 1;
        setFollowers(removeFollower);
        setStatus(false)
    }

    useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('status', JSON.stringify(status));
  }, [followers, status]);

  const addComa = () => {
    const followersArray = String(followers).split('');
    const comaPosition = followersArray.length - 3;
    followersArray.splice(comaPosition, 0, ",");
    const newFollowers = followersArray.reduce((previousValue, letter) => previousValue + letter, '');
    return newFollowers
  }

  const follower = addComa();;
  
    return (
        <CardConteiner>
            <Logo src={logo} alt='logo GoIt' height='22px'/>
            <Message src={message} alt='message' height='168px'/>
            <Line>
                <Boy src={boy} alt='boy'/>
            </Line>
            <Text>777 tweets</Text>
            <Text>{followers >= 1000 ? follower : followers} Followers</Text>
            {status ? <BtnAdded type='button' onClick={()=>countFollower()}><ButtonName>Following</ButtonName></BtnAdded>
                    : <BtnAdd type='button' onClick={()=>countFollower()}><ButtonName>Follow</ButtonName></BtnAdd>
            }
        </CardConteiner>
    )
}
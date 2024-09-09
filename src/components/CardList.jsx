import Card from "./Card"
import LegolasImage from '../assests/Legolas.jpg'
import AragornImage from '../assests/Aragorn.jpg'
import GimliImage from '../assests/Gimli.jpg'
import GandalfImage from '../assests/Gandalf.jpg'
import HarryPotterImage from '../assests/HarryPotter.jpg'
import HobbitImage from '../assests/Hobbit.jpg'
import LOTRImage from '../assests/LOTR.jpg'
import TomSawyerImage from '../assests/TomSawyer.jpg'

const data1 = [
    { id:1, name: "Legolas", image:LegolasImage},
    { id:2, name: "Aragorn", image:AragornImage},
    { id:3, name: "Gimli", image:GimliImage},
    { id:4, name: "Gandalf", image:GandalfImage}
]

const data2 = [
    { id:1, name: "Harry Potter and the Phylosopher's Stone", mainCharacter:"Harry Potter", image:HarryPotterImage},
    { id:2, name: "The Hobbit", mainCharacter:"Bilbo Baggins", image:HobbitImage},
    { id:3, name: "Lord of the rings", mainCharacter:"Frodo Baggins", image:LOTRImage},
    { id:4, name: "Tom Sawyer's Adventure", mainCharacter:"Tom Sawyer", image:TomSawyerImage}
]

const CardList = () => {
    
    function action(name, mainCharacter) {
        console.log(`This book is ${name}, Main character is  ${mainCharacter}`)
    }
  
    return (
    <div className="card-list">
        {data2.map((card) => <Card key={card.id} name={card.name} image={card.image} mainCharacter={card.mainCharacter} action={action}/>)}
        {/* <Card name="Legolas" image={LegolasImage} action={action}/>
        <Card name="Aragorn" image={AragornImage} action={action}/>
        <Card name="Gimli"  image={GimliImage} action={action}/>
        <Card name="Gandalf" image={GandalfImage} action={action} /> */}
    </div>
  )
}

export default CardList

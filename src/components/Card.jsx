const Card = ({name, image, action, mainCharacter}) => {
    return (
      <div className="card">
        <h1 className="card-title">{name}</h1>
        <div className="img-box">
            <img src={image} alt={name} />
        </div>
        <button onClick={() => action(name, mainCharacter)} className="btn">button</button>
      </div>
    )
  }
  
  export default Card
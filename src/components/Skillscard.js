import React from "react"

const Skillscard = ({items, cardName}) => {
    const imgObj = items.map(item => <li key={item.id}><img src={item.imgLink} alt=""/><br/>{item.imgName}</li>);
    return (
        <>
            <div className="card-container">
                    <h1>{cardName}</h1>
                    <ul>
                        {imgObj}
                    </ul>
                </div>
        </>
    )
}
export default Skillscard
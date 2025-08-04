const user = {
    username : "Rado Hidaayatulloh",
    Description: "Hello saya adalah Web Developer",
    imageUrl : "https://i.pinimg.com/564x/0b/18/e2/0b18e29e43f88db3a33936c4723f0534.jpg",
    imageSize : 300,
    imageRadius: 40,
}

function Section(){
    return(
        <section>
            <div className="SectionLeft">
                <h1>{user.username}</h1>
                <p>{user.Description}</p>
            </div>
            <div className="SectionRight">
                <img src={user.imageUrl} alt="" style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: user.borderRadius
                }} />
            </div>
        </section>
    )
}

export default Section;
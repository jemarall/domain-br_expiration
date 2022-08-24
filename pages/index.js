function Home() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    Response.json({
        date: dynamicDateString
    })

    //return <div>{dynamicDateString}</div>
}

export default Home
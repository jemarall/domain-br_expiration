function Home() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGTMString();
    return <div>{dynamicDateString}</div>
}

export default Home
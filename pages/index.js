function Home() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.goGTMString();
    return <div>{dynamicDateString}</div>
}

export default Home
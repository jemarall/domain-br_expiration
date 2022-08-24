function Home() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return <div>{dynamicDateString}</div>
}

export default Home
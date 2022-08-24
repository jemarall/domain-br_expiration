function registrobr(request, response) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    response.json({
        date: dynamicDateString
    })

}

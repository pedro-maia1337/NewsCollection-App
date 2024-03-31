const useRequest = () => {
    const getNews = async (url) => {
        const res =  await fetch(url)
        const data = await res.json()
        return data.articles.slice(0, 20)
    }

    return {getNews}
}

export default useRequest
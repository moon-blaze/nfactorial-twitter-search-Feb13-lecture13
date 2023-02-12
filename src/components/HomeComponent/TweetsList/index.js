import Tweet from './Tweet';

export default function TweetsList({tweets, deleteTweet, searchString}){

    if (searchString !== "") {
        return (
            tweets.filter((e) => {
                let str = e.content.toLowerCase().includes(searchString.toLowerCase());
                return str;
            }).map((tweet) => <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />)
        )
    }

    else if (searchString === "") {
        return (
            tweets.map((tweet)=> <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet}/>)
        )
    }
}
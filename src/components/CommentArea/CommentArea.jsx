import { useEffect, useState } from "react"

const CommentArea = ({ asin }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {

        fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
            })
            .catch((err) => console.log(err))

    }, [asin])

    return (
        <div>
            <h5>Recensioni del libro</h5>

            {comments.map((comment) => (
                <p key={comment._id}>
                    {comment.comment} : ⭐ {comment.rate}
                </p>
            ))}
        </div>
    )
}

export default CommentArea

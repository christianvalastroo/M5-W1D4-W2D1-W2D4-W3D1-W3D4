import "./SingleComment.css"

const SingleComment = ({ comment, refreshComments }) => {

    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: ``
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Errore eliminazione commento")
                }
                refreshComments()
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div className="single-comment">
            <p className="comment-text">{comment.comment}</p>
            <p className="comment-rate">⭐ {comment.rate}</p>

            <button className="delete-comment-btn" onClick={deleteComment}>
                Elimina
            </button>
        </div>
    )
}

export default SingleComment
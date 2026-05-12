import "./SingleComment.css"

const SingleComment = ({ comment, refreshComments }) => {

    // Elimina il commento e poi aggiorna la lista.
    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c`
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

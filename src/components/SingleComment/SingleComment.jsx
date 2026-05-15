import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import "./SingleComment.css"

const SingleComment = ({ comment, refreshComments }) => {
    const { theme } = useContext(ThemeHome)
    const [isEditing, setIsEditing] = useState(false)
    const [editedComment, setEditedComment] = useState({
        comment: comment.comment,
        rate: comment.rate
    })

    // Elimina il commento e poi aggiorna la lista.
    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MGU3ZGQ2M2FhMTAwMTUxM2RlNzEiLCJpYXQiOjE3Nzg4NDczNTcsImV4cCI6MTc4MDA1Njk1N30.q7xJjkjhZlwSD75rGPKC3vsd8FftiLrT_jvuascRslA`
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

    // Modifica il commento e poi aggiorna la lista.
    const updateComment = (e) => {
        e.preventDefault()

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MGU3ZGQ2M2FhMTAwMTUxM2RlNzEiLCJpYXQiOjE3Nzg4NDczNTcsImV4cCI6MTc4MDA1Njk1N30.q7xJjkjhZlwSD75rGPKC3vsd8FftiLrT_jvuascRslA`
            },
            body: JSON.stringify({
                ...editedComment,
                elementId: comment.elementId
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Errore modifica commento")
                }
                setIsEditing(false)
                refreshComments()
            })
            .catch((err) => console.log(err.message))
    }

    const cancelEdit = () => {
        setEditedComment({
            comment: comment.comment,
            rate: comment.rate
        })
        setIsEditing(false)
    }

    return (
        <div className={`single-comment p-3 mb-3 rounded border ${theme === "dark" ? "single-comment-dark" : "bg-white text-dark"}`}>
            {isEditing ? (
                <Form className="d-flex flex-column gap-2" onSubmit={updateComment}>
                    <Form.Control
                        type="text"
                        value={editedComment.comment}
                        onChange={(e) =>
                            setEditedComment({
                                ...editedComment,
                                comment: e.target.value
                            })
                        }
                    />

                    <Form.Select
                        value={editedComment.rate}
                        onChange={(e) =>
                            setEditedComment({
                                ...editedComment,
                                rate: Number(e.target.value)
                            })
                        }
                    >
                        <option value="1">1 stella</option>
                        <option value="2">2 stelle</option>
                        <option value="3">3 stelle</option>
                        <option value="4">4 stelle</option>
                        <option value="5">5 stelle</option>
                    </Form.Select>

                    <div className="d-flex gap-2 flex-wrap">
                        <Button variant="success" size="sm" type="submit">
                            Salva
                        </Button>

                        <Button
                            variant="secondary"
                            size="sm"
                            type="button"
                            onClick={cancelEdit}
                        >
                            Annulla
                        </Button>
                    </div>
                </Form>
            ) : (
                <>
                    <p className="mb-1">{comment.comment}</p>
                    <p className="comment-rate mb-2">⭐ {comment.rate}</p>

                    <div className="d-flex gap-2 flex-wrap">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setIsEditing(true)}
                        >
                            Modifica
                        </Button>

                        <Button variant="danger" size="sm" onClick={deleteComment}>
                            Elimina
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleComment

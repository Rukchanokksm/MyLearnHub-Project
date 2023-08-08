const deleteContent = (id) => {
  const token = localStorage.getItem("token")

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/content/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        alert("Item deleted successfully")
      } else {
        console.error("Failed to delete item")
      }
    } catch (err) {
      console.error(err)
    }
  }
  fetchData()
  return
}

export default deleteContent

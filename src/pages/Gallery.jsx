{/*import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const API_URL = "http://localhost:5001/api/gallery"; // Updated API URL

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [openUpload, setOpenUpload] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false); // State for delete confirmation
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  // Fetch all images
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(API_URL);
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error.message);
      alert("Failed to load images. Please check your server.");
    }
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!imageFile) return alert("Please select an image");

    const form = new FormData();
    form.append("image", imageFile);
    form.append("title", formData.title);
    form.append("description", formData.description);

    try {
      await axios.post(API_URL, form);
      setOpenUpload(false);
      fetchImages(); // Refresh images after upload
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image.");
    }
  };

  // Handle Image Deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/${selectedImage.image_id}`);
      setOpenDelete(false); // Close delete dialog
      fetchImages(); // Refresh images after deletion
    } catch (error) {
      console.error("Error deleting image:", error.message);
      alert("Failed to delete image.");
    }
  };

  // Handle Edit Click
  const handleEditClick = (image) => {
    setSelectedImage(image);
    setFormData({ title: image.title, description: image.description });
    setOpenEdit(true);
  };

  // Handle Image Update
  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${selectedImage.image_id}`, formData);
      setOpenEdit(false);
      fetchImages(); // Refresh images after update
    } catch (error) {
      console.error("Error updating image:", error.message);
      alert("Failed to update image.");
    }
  };

  return (
    <Container>
      <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={() => setOpenUpload(true)}
        style={{
          backgroundColor: "#a36a4f",
          boxShadow: "0 8px 15px rgba(163, 106, 79, 0.5)", // Increased shadow for button
        }}
      >
        Upload Image
      </Button>

      {/* Image Grid 
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {images.map((image) => (
          <Grid item key={image.image_id} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                boxShadow: "0 8px 20px rgba(163, 106, 79, 0.5)", // Increased shadow for card
                transition: "transform 0.3s ease", // Smooth transition for hover effect
              }}
              sx={{
                "&:hover": {
                  transform: "scale(1.05)", // Card will pop up when hovered
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image.image_url}
                alt={image.title}
              />
              <CardContent>
                <Typography variant="h6">{image.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {image.description}
                </Typography>
              </CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center", // Center icons
                  padding: "10px",
                }}
              >
                <IconButton
                  color="success"
                  onClick={() => handleEditClick(image)}
                  style={{ color: "green" }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    setSelectedImage(image); // Set the image to be deleted
                    setOpenDelete(true); // Open confirmation dialog
                  }}
                  style={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upload Dialog 
      <Dialog open={openUpload} onClose={() => setOpenUpload(false)}>
        <DialogTitle>Upload New Image</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="dense"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label="Description"
            fullWidth
            margin="dense"
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpload(false)}>Cancel</Button>
          <Button onClick={handleUpload} variant="contained">
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog 
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="dense"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label="Description"
            fullWidth
            margin="dense"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog 
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this image?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Gallery; */}


import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const API_URL = "http://localhost:5001/api/gallery";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [openUpload, setOpenUpload] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all images
  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Failed to load images. Please check your server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Handle Image Upload
  const handleUpload = async () => {
    if (!imageFile) return alert("Please select an image.");

    const form = new FormData();
    form.append("image", imageFile);
    form.append("title", formData.title);
    form.append("description", formData.description);

    setLoading(true);
    try {
      const response = await axios.post(API_URL, form);
      // Add the new image to the state immediately
      setImages(prevImages => [...prevImages, response.data]);
      setOpenUpload(false);
      setImageFile(null);
      setFormData({ title: "", description: "" });
      // Fetch all images to ensure sync with server
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Image Deletion
  const handleDelete = async () => {
    if (!selectedImage) return;
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${selectedImage.image_id}`);
      // Remove the deleted image from state immediately
      setImages(prevImages => prevImages.filter(img => img.image_id !== selectedImage.image_id));
      setOpenDelete(false);
      setSelectedImage(null);
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Edit Click
  const handleEditClick = (image) => {
    setSelectedImage(image);
    setFormData({ title: image.title, description: image.description });
    setOpenEdit(true);
  };

  // Handle Image Update
  const handleUpdate = async () => {
    if (!selectedImage) return;
    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/${selectedImage.image_id}`, formData);
      // Update the image in state immediately
      setImages(prevImages => 
        prevImages.map(img => 
          img.image_id === selectedImage.image_id ? { ...img, ...formData } : img
        )
      );
      setOpenEdit(false);
      setSelectedImage(null);
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Failed to update image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={() => {
          setFormData({ title: "", description: "" });
          setOpenUpload(true);
        }}
        style={{
          backgroundColor: "#a36a4f",
          boxShadow: "0 8px 15px rgba(163, 106, 79, 0.5)",
        }}
        disabled={loading}
      >
        Upload Image
      </Button>

      {/* Loading indicator */}
      {loading && (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <CircularProgress style={{ color: "#a36a4f" }} />
        </div>
      )}

      {/* Image Grid */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {images.map((image) => (
          <Grid item key={image.image_id} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                boxShadow: "0 8px 20px rgba(163, 106, 79, 0.5)",
                transition: "transform 0.3s ease",
              }}
              sx={{
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia component="img" height="200" image={image.image_url} alt={image.title} />
              <CardContent>
                <Typography variant="h6">{image.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {image.description}
                </Typography>
              </CardContent>
              <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                <IconButton 
                  color="success" 
                  onClick={() => handleEditClick(image)} 
                  style={{ color: "green" }}
                  disabled={loading}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    setSelectedImage(image);
                    setOpenDelete(true);
                  }}
                  style={{ color: "red" }}
                  disabled={loading}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upload Dialog */}
      <Dialog open={openUpload} onClose={() => setOpenUpload(false)}>
        <DialogTitle>Upload New Image</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="dense"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label="Description"
            fullWidth
            margin="dense"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpload(false)} disabled={loading}>Cancel</Button>
          <Button onClick={handleUpload} variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Upload"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Image</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="dense"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label="Description"
            fullWidth
            margin="dense"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)} disabled={loading}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Update"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this image?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)} disabled={loading}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Gallery;


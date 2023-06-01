import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function ProductCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component="a" href={data.link} target="_blank">
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title={data.name}
          component="img"
        />
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            {data.details}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
            mb={1}
          >
            {data.originalPrice}
          </Typography>
          <Typography variant="body1" fontWeight="bold" color="error">
            {data.currentPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

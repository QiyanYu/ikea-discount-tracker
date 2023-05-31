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
        <CardHeader title={data.discountPercent} />
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title={data.name}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.details}
          </Typography>
          <Typography>{data.originalPrice}</Typography>
          <Typography>{data.currentPrice}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

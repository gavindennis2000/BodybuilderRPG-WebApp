import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Types for downloads
interface Download {
  label: string;
  href: string;
}

interface VersionCardProps {
  version: string;
  releaseDate: string;
  notes: string;
  downloads: Download[];
}

const bgColor: string = "rgba(13, 13, 13, 0.9)";
const textColor: string = "#90caf9";

const VersionCard: React.FC<VersionCardProps> = ({
  version,
  releaseDate,
  notes,
  downloads,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card square sx={{ mb: 2, color: textColor}}>
      <CardHeader
        title={version}
        subheader={
          <Typography sx={{ color: textColor }}>
            Released: {releaseDate}
          </Typography>
        }
        sx={{
          backgroundColor: bgColor,
        }}
        action={
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <ExpandMoreIcon sx={{color: "rgba(255, 255, 255, 0.87)"}} />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{backgroundColor: bgColor}}>
          <Typography variant="body2" sx={{ mb: 1, color: "rgba(255, 255, 255, 0.87)" }}>
            {<strong>Notes</strong>}: {notes}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: '30px' }}>
            {downloads.map((file) => (
              <Button
                key={file.label}
                variant="contained"
                href={file.href}
                target="_blank"
              >
                {file.label}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default VersionCard;
import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <div className="footer">
        <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:5173/#">
          Codennect
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      </div>
    );
}

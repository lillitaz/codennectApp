import { Card } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function Paragraph( {header, content} ) {
    return (
        <Card sx={{ maxWidth: 800 }} style={{margin: '1% auto'}}>
          <CardContent>
            <Typography variant='h4'  gutterBottom>
            
</Typography>
         
            <Typography sx={{ mb: 4.5 }} color="text.secondary">
            {header}
            </Typography>
            <Typography variant="body1">
              {content}
            </Typography>
          </CardContent>
        </Card>
  );
}

export default Paragraph;

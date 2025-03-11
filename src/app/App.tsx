import { CssBaseline, Container } from '@mui/material';
import { NewsManager } from '@/features/news-manager/NewsManager';

function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 4 }} style={{ marginTop: 0 }}>
                <NewsManager />
            </Container>
        </>
    );
}

export default App;
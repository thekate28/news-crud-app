import { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';

import styles from './NewsForm.module.scss';

interface NewsFormProps {
    onSubmit: (data: { title: string; content: string }) => void;
    initialData?: { title: string; content: string };
}

export const NewsForm = ({ onSubmit, initialData }: NewsFormProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            setError('Заполните все поля');
            return;
        }

        setError('');
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
                label="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
                error={!!error}
            />
            <TextField
                label="Содержание"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={!!error}
            />
            {error && (
                <Typography color="error" variant="body2">
                    {error}
                </Typography>
            )}
            <Button type="submit" variant="contained" color="primary">
                {initialData ? 'Обновить новость' : 'Добавить новость'}
            </Button>
        </form>
    );
};
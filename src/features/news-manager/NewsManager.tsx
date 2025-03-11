import { useState } from 'react';
import { NewsList } from '@/widgets/news-list/NewsList.tsx';
import { NewsForm } from '@/features/news-manager/ui/NewsForm';
import { useNews } from '@/entities/news/useNews.ts';

import styles from './NewsManager.module.scss';

export const NewsManager = () => {
    const { news, addNews, editNews, deleteNews } = useNews();
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleSubmit = (data: { title: string; content: string }) => {
        if (editingId) {
            editNews(editingId, data);
            setEditingId(null);
        } else {
            addNews(data);
        }
    };

    const handleEdit = (id: string) => {
        const newsItem = news.find((item) => item.id === id);
        if (newsItem) {
            setEditingId(id);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Управление новостями</h1>
            <NewsForm
                onSubmit={handleSubmit}
                initialData={
                    editingId ? news.find((item) => item.id === editingId) : undefined
                }
            />
            <NewsList
                news={news}
                onEdit={handleEdit}
                onDelete={deleteNews}
            />
        </div>
    );
};
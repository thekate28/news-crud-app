import { useState } from 'react';

interface NewsItem {
    id: string;
    title: string;
    content: string;
}

const LOCAL_STORAGE_KEY = 'news-app-data';

export const useNews = () => {
    const [news, setNews] = useState<NewsItem[]>(() => {
        const savedNews = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedNews ? JSON.parse(savedNews) : [];
    });

    const addNews = (item: Omit<NewsItem, 'id'>) => {
        const newNews = [...news, { ...item, id: Date.now().toString() }];
        setNews(newNews);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newNews));
    };

    const editNews = (id: string, updatedItem: Omit<NewsItem, 'id'>) => {
        const updatedNews = news.map((item) =>
            item.id === id ? { ...item, ...updatedItem } : item
        );
        setNews(updatedNews);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNews));
    };

    const deleteNews = (id: string) => {
        const filteredNews = news.filter((item) => item.id !== id);
        setNews(filteredNews);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredNews));
    };

    return { news, addNews, editNews, deleteNews };
};
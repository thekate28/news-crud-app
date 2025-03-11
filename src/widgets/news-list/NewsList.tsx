import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './NewsList.module.scss';

interface NewsListProps {
    news: { id: string; title: string; content: string }[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export const NewsList = ({ news, onEdit, onDelete }: NewsListProps) => {
    return (
        <List className={styles.list}>
            {news.map((item) => (
                <ListItem key={item.id} className={styles.listItem}>
                    <ListItemText primary={item.title} secondary={item.content} className={styles.content}/>
                    <div>
                        <IconButton onClick={() => onEdit(item.id)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </ListItem>
            ))}
        </List>
    );
};
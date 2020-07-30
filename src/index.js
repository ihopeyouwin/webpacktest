import Post from '@models/Post';
import '@/styles/styles.css';
import WebpackLogo from '@/assets/testImg.jpg';

const post = new Post('webpack test title', WebpackLogo)

console.log(post.toString())
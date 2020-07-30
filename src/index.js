import Post from '@models/Post';
import '@/styles/styles.css';
import WebpackLogo from '@/assets/testImg.jpg';
import './babel.js'
import '@/styles/less.less';
import '@/styles/scss.scss'

const post = new Post('webpack test title', WebpackLogo)

console.log(post.toString())
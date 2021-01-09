import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { getPaginatedBlogPosts, changeNumBlogs, numBlogsSelector, changeCurrentPage, getBlogPosts } from '../store/blogSlice';
import Pagination from './common/pagination';

const PostList = () => {

    // todo 
    // write a custom shared hook
    const dispatch = useDispatch();
    const store = useStore();
    
    
    const posts = useSelector(getPaginatedBlogPosts);
    const numItems = useSelector(numBlogsSelector);
    const numPosts = store.getState().blogSlice.list.length;
    const currentPage = store.getState().blogSlice.currentPage;

    const numItemsArr = [3,6,12,24,36];
    const handleNumChange = (evt) => {
        dispatch(changeNumBlogs(evt.target.value));
    }

    const handlePageChange = (value) =>  {
        dispatch(changeCurrentPage(value));
    }
  

    useEffect(() => {
        dispatch(getBlogPosts());


    }, [dispatch]);

    return (  
        <div className="container">
        <div className="row  m-2"> 
            <div className="col-md-1 offset-md-9">
                Page {currentPage}   
            </div>
            <div className="col-md-2">
                <select onChange={handleNumChange} className="btn-mini">
                <option value="">Show</option>
                    {numItemsArr.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
            </div>
            
        </div>
        <div className="row justify-content-md-center">

            {posts.map((post) =>  {
                return (
                    <div key={post.id} className="card  col-md-3 m-1 ">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">
                            {post.body}
                            </p>
                            
                        </div>
                    </div>
                );
               
            })}
        </div>
        <Pagination itemsCount={numPosts} pageSize={numItems} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    )
}
 
export default PostList;
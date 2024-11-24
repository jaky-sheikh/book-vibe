import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooks from './ListedBooks';
import { useLoaderData } from 'react-router-dom';
const ListedBooks = () => {

    const allBooks = useLoaderData();

    useEffect(() =>{

    }, [])


    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2 className='text-2xl'>Books I Read</h2>
                </TabPanel>
                <TabPanel>
                <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
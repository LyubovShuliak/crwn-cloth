import React from 'react';
import style from './collection.module.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'
 const Collection = ({collection}) => {
 const {title, items} = collection
 console.log(collection.items);
   return ( <div className={style.collectionPage}>
      <h2 className={style.title}> {title}</h2>
      <div className={style.items}>
        {items.map(item=>(
          <CollectionItem key = {item.id} item ={item}/>
        ))}

      </div>


  </div>
  )}
;
const mapStateToProps  = (state, ownProps) =>({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection);
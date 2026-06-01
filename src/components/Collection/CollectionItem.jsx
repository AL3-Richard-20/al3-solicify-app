// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CollectionItem({ collctn_name, total_items, date_added, collectionInfo }){

    return (
        <div 
            className="p-2 border border-gray-300 rounded w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]" 
            onClick={(e) => collectionInfo(
                e, 
                collctn_name
            )}>

            <div className="text-right">
                {/* <FontAwesomeIcon className="mr-2 ml-2" icon={faEllipsisV} /> */}
                <ion-icon class="mr-2 ml-2" name="ellipsis-vertical-outline"></ion-icon>
            </div>

            <div className="mb-3 flex items-center justify-center flex-wrap">
                <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
                <div className="h-[50px] w-[50px] bg-slate-300 m-1"></div>
            </div>

            <div className="text-center">
                <h4 className="font-bold">{ collctn_name }</h4>
                <p className="text-gray-500">Total items: <span>{ total_items }</span></p>
                <p>{ date_added }</p>
            </div>

        </div>
    )
}
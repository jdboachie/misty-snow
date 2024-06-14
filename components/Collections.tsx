import { TableIcon } from "@/components/icons/TableIcon";
import { DropDown } from "@/components/icons/DropDown";
import { Key } from "@phosphor-icons/react";
import { ColumnIcon } from "@/components/icons/ColumnIcon";
import { useState, useRef } from "react";
export default function Collections() {
    const tableInfo = [
        {
            'table_name': 'product_data',
            'columns': [
                {
                    'col_name': 'product_id',
                    'type': 'int',
                    'isPk': true
                },
                {
                    'col_name': 'product_name',
                    'type': 'varchar',
                    'isPk': false
                },
                {
                    'col_name': 'product_price',
                    'type': 'int',
                    'isPk': false
                }
            ]
        },
        {
            'table_name': 'customer_data',
            'columns': [
                {
                    'col_name': 'customer_id',
                    'type': 'int',
                    'isPk': true
                },
                {
                    'col_name': 'customer_name',
                    'type': 'varchar',
                    'isPk': false
                },
                {
                    'col_name': 'customer_email',
                    'type': 'varchar',
                    'isPk': false
                }
            ]
        },
        {
            'table_name': 'order_data',
            'columns': [
                {
                    'col_name': 'order_id',
                    'type': 'int',
                    'isPk': true
                },
                {
                    'col_name': 'order_date',
                    'type': 'date',
                    'isPk': false
                }
            ]
        }
    ];

    const [isDropDown, setDropDown] = useState(true);
    const handleDropDown = ()=>setDropDown(!isDropDown);
    

    return (
        <div className="flex flex-col">
            <div className="collections flex items-center justify-between cursor-pointer hover:bg-muted dark:hover:bg-muted mx-1 my-2 rounded" onClick={handleDropDown}>
                <div className="grow font-bold px-1 py-1">Collections</div>
                <DropDown className={`size-5 text-slate-700 dark:text-white ${isDropDown?'rotate-0': 'rotate-90'} transition-transform duration-300`}/>
            </div>

            <div className={`transition-all duration-300 ${isDropDown? 'max-h-screen overflow-auto': 'max-h-0 overflow-hidden'}`}>
                {tableInfo.map((element, tableIndex) => (
                    <div className="table-container px-3 py-1" key={tableIndex}>
                        <div className="table-name flex flex-row items-center gap-2">
                            <TableIcon className="text-slate-700 dark:text-white size-4" />
                            <div className="table-name capitalize font-semibold">{element.table_name}</div>
                        </div>
                        <div className="table-columns text-sm px-4 py-2 flex flex-col gap-2">
                            {element.columns.map((column, colIndex) => (
                                <div className="column grid grid-cols-6" key={colIndex}>
                                    <div className="grid col-span-5">
                                        <div className="flex items-center gap-2">
                                            {column.isPk === true ? <Key className="size-4 -rotate-45" /> : <ColumnIcon className="size-4" />}
                                            <div className="capitalize text-black dark:text-gray-100">{column.col_name}</div>
                                        </div>
                                    </div>
                                    <div className="type grid col-span-1 text-xs text-gray-700 dark:text-muted-foreground">{column.type}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

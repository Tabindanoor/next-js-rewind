import Link from "next/link";

export default function NestedDynamic(){
    return  (
        <div>
            <p>nested with route events/anything/nested/anything</p>
           <button><Link href="/events/london/1">hehe</Link></button> 
    </div>
    );

}
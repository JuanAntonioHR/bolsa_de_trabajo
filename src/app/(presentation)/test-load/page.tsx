import { CardSkeleton, LoadingIcon,  } from "@/components";

export default function Page() {
    return (
        <div className="flex items-center justify-center my-auto">
            <LoadingIcon />
            <CardSkeleton />
        </div>
    );
}
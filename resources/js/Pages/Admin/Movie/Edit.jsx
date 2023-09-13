import { Link, Head, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Input from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors, put } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        put(route("admin.dashboard.movie.update", movie.id), {
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Update Movie: {movie.name} </h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    handleChange={onHandleChange}
                    defaultValue={movie.name}
                />
                <InputError message={errors.name} className="mt-2" />
                <Label forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    handleChange={onHandleChange}
                    defaultValue={movie.category}
                />
                <InputError message={errors.category} className="mt-2" />
                <Label
                    forInput="video_url"
                    value="Video_url"
                    className="mt-4"
                />
                <Input
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie"
                    handleChange={onHandleChange}
                    defaultValue={movie.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />
                <img
                    src={`/storage/${movie.thumbnail}`}
                    alt=""
                    className="w-40 mt-2"
                />
                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <Input
                    accept="image/*"
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert thumbnail of the movie"
                    handleChange={onHandleChange}
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <Label forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Enter the rating of the movie"
                    handleChange={onHandleChange}
                    defaultValue={movie.rating}
                />
                <InputError message={errors.rating} className="mt-2" />
                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-2"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <Button type="submit" className="mt-4" disabled={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}

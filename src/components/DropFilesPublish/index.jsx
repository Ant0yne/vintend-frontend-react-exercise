import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

import "./dropFilesPublish.css";

const DropFilesPublish = ({ setFiles, isAvatar }) => {
	let limitedfile = 0;
	isAvatar && (limitedfile = 1);

	const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
		useDropzone({ maxFiles: limitedfile });

	// To display the list of files added to be uploaded
	const filesAll = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	// Update the state with the files with what is added to the component
	useEffect(() => {
		const temp = [...acceptedFiles];
		setFiles(temp);
	}, [acceptedFiles, setFiles]);

	return (
		<>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				{/* Display a different message when some files are drag 'n' drop above the div */}
				{isAvatar ? (
					isDragActive ? (
						<p>Déposer ici</p>
					) : (
						<p>
							Faites glisser votre photo de profil ici (ou cliquez dans le
							cadre)
						</p>
					)
				) : isDragActive ? (
					<p>Déposer ici</p>
				) : (
					<p>
						Faites glisser les photo de votre offre ici (ou cliquez dans le
						cadre).
					</p>
				)}
			</div>
			<aside>
				<p>Fichiers</p>
				<ul>{filesAll}</ul>
			</aside>
		</>
	);
};

export default DropFilesPublish;

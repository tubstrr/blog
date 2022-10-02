export const usePage = async () => {
	return await queryContent(useRoute().path).findOne();
};

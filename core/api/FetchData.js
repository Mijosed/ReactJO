// Dans le fichier /core/api/fetchData.js

export const fetchData = async () => {
    const response = await fetch(
        'http://localhost:3000/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?order_by=start_date&limit=61&offset=0&exclude=category_id%3Avenue-paralympic&lang=fr&timezone=Europe%2FParis&include_links=false&include_app_metas=true',
    );
    const data = await response.json();
    return data.records;
};

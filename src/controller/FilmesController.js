import FilmesModel from '../model/model.js';

export default class FilmesController {
    static async findAll(request, response) {
        try {
            const filmes = await FilmesModel.findAll();
            response.status(200).json(filmes);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Erro ao buscar os filmes' });
        }
    }

    static async cadastrarFilme(request, response) {
        const { titulo, ator, faixa_etaria, genero } = request.body;

        // Validação dos campos obrigatórios
        if (!titulo || !ator || !faixa_etaria || !genero) {
            return response.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Validação específica
        if (faixa_etaria <= 0) {
            return response.status(400).json({ error: 'Faixa etária deve ser maior que 0' });
        }

        try {
            const filmeCriado = await FilmesModel.create({ titulo, ator, faixa_etaria, genero });
            response.status(201).json({ filmes: filmeCriado });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Erro ao cadastrar o filme' });
        }
    }

    static async atualizarFilme(request, response) {
        const { id } = request.params;
        const { titulo, ator, faixa_etaria, genero } = request.body;

        // Validação dos campos obrigatórios
        if (!titulo || !ator || !faixa_etaria || !genero) {
            return response.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Validação específica
        if (faixa_etaria <= 0) {
            return response.status(400).json({ error: 'Faixa etária deve ser maior que 0' });
        }

        const dadosAtualizados = { titulo, ator, faixa_etaria, genero };
        try {
            const [linhasAfetadas] = await FilmesModel.update(dadosAtualizados, {
                where: { id },
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: 'Filme não encontrado' });
            }

            const filmeAtualizado = await FilmesModel.findByPk(id);
            response.status(200).json({ filmes: filmeAtualizado });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Erro ao atualizar o filme' });
        }
    }

    static async deletarFilme(request, response) {
        const { id } = request.params;

        try {
            const linhasAfetadas = await FilmesModel.destroy({
                where: { id },
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: 'Filme não encontrado' });
            }

            response.status(200).json({ message: 'Filme deletado com sucesso' });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Erro ao deletar o filme' });
        }
    }
}
